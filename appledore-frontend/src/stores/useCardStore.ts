import { create } from 'zustand'
import axios from 'axios'
import { config } from '../config'
import { useMemo } from 'react'
export interface CardType {
    _id?: string
    type: 'videos' | 'X' | 'link' | 'blog' | 'document'
    title: string
    link: string
}

export type CardFilterType = CardType['type'] | 'all'

interface CardsStore {
    cards: CardType[]
    selectedType: CardFilterType
    isLoading: boolean
    fetchCards: () => Promise<void>
    deleteCard: (id: string) => Promise<void>
    setSelectedType: (type: CardFilterType) => void
}

const useCardsStore = create<CardsStore>((set, get) => ({
    cards: [],
    selectedType: 'all',
    isLoading: false,

    fetchCards: async () => {
        set({ isLoading: true })
        try {
            const token = localStorage.getItem('token')
            const { data } = await axios.get(`${config.baseURL}/content`, {
                headers: { token: token || '' },
            })
            set({ cards: data?.content })
        } catch (error) {
            console.error('Error fetching content:', error)
        } finally {
            set({ isLoading: false })
        }
    },

    deleteCard: async (id: string) => {
        const previousCards = get().cards
        set({ cards: previousCards.filter((card) => card._id !== id) })

        try {
            const token = localStorage.getItem('token')
            await axios.delete(`${config.baseURL}/content`, {
                data: { contentId: id },
                headers: { token: token || '' },
            })
        } catch (error) {
            console.error('Error deleting content:', error)
            set({ cards: previousCards })
        }
    },

    setSelectedType: (type) => set({ selectedType: type }),
}))



export const useFilteredCards = () => {
    const cards = useCardsStore((state) => state.cards)
    const selectedType = useCardsStore((state) => state.selectedType)
    return useMemo(() => {
        if (selectedType === 'all') return cards
        return cards.filter((card) => card.type === selectedType)
    }, [cards, selectedType])
}

export default useCardsStore