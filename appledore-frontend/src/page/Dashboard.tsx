import { Button } from '../components/Button'
import { Plus } from '../icons/Plus'
import { Card } from '../components/Card'
import AddContentModal from '../components/AddContentModal'
import { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { ThemeToggle } from '../components/ThemeToggle'
import useCardsStore, { useFilteredCards } from '../stores/useCardStore'

export const Dashboard = () => {
    const [modalState, setModal] = useState(false);
    //store
    const cards = useFilteredCards();
    const fetchData = useCardsStore((s)=>s.fetchCards)
    const handleDelete = useCardsStore((s)=>s.deleteCard)

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const username=localStorage.getItem('username')||''
    
    useEffect(()=>{
    fetchData()
    }, [modalState])

    

    
  return (
    <div className='min-h-screen bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-slate-100 overflow-x-hidden'>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <main className='md:ml-64 transition-all duration-200'>
        <header className='sticky top-0 z-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-slate-800'>
          <div className='flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4 gap-4'>
            <div className='flex items-center gap-3'>
              <button
                className='md:hidden inline-flex items-center justify-center rounded-lg border border-gray-200 dark:border-slate-700 px-3 py-2 text-gray-700 dark:text-slate-100 bg-white dark:bg-slate-900'
                onClick={() => setSidebarOpen(true)}
                aria-label='Open sidebar'
              >
                ☰
              </button>
              <div>
                <h1 className='font-semibold text-2xl text-gray-900 dark:text-white'>All Notes</h1>
                <p className='text-sm text-gray-500 dark:text-slate-400 mt-0.5'>Manage your saved content</p>
              </div>
            </div>
            <div className='flex gap-3 items-center flex-wrap justify-end'>
              <ThemeToggle />
              <p className='text-md text-gray-500 dark:text-slate-300 mt-0.5'>{username} </p>
              <Button 
                size='sm' 
                text='Add content' 
                startIcon={<Plus size='md'/>} 
                onClick={() => setModal(true)}
              />
            </div>
          </div>
        </header>
        
        <div className='p-4 sm:p-6 lg:p-8'>
          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6'>
            {
  cards.map((card) =>
    card._id ? (
      <Card
        key={card._id}
        _id={card._id}
        type={card.type}
        link={card.link}
        title={card.title}
        onDelete={() => handleDelete(card._id!)}
      />
    ) : null
  )
}

          </div>
        </div>
      </main>
      
      <AddContentModal open={modalState} onClose={() => setModal(false)} />
    </div>
  )
}
