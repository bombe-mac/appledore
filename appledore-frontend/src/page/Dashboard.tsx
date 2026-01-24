import { Button } from '../components/Button'
import { Plus } from '../icons/Plus'
import { Share } from '../icons/Share'
import { Card } from '../components/Card'
import AddContentModal from '../components/AddContentModal'
import { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import axios from 'axios'
import { config } from '../config'

type ContentItem = {
  _id?: string
  type: 'videos' | 'X' | 'link' | 'blog' | 'document'
  title: string
  link: string
  
}

export const Dashboard = () => {
    const [modalState, setModal] = useState(false);
    const [cardData, setCardData]=useState<ContentItem[]>([])
    const [deleted, setDeleted]=useState(false);
     const fetchData = async ()=>{
      try {
        const token=localStorage.getItem('token')
        const {data}=await axios.get(`${config.baseURL}/content`,
          {
            headers: {
              token: token || '',
            }
          }
        );
          setCardData(data?.content)
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    }
    
    useEffect(()=>{
    fetchData()
    }, [modalState])

    

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <main className='ml-64'>
        {/* Header */}
        <header className='sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-200'>
          <div className='flex justify-between items-center px-8 py-4'>
            <div>
              <h1 className='font-semibold text-2xl text-gray-900'>All Notes</h1>
              <p className='text-sm text-gray-500 mt-0.5'>Manage your saved content</p>
              <p></p>
            </div>
            <div className='flex gap-3'>
              <Button 
                size='sm' 
                text='Add content' 
                startIcon={<Plus size='md'/>} 
                onClick={() => setModal(true)}
              />
              <Button 
                size='sm' 
                text='Share Brain' 
                startIcon={<Share size='md'/>} 
                onClick={() => {}}
              />
            </div>
          </div>
        </header>
        
        {/* Content Grid */}
        <div className='p-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {
  cardData.map((card) =>
    card._id ? (
      <Card
        key={card._id}
        _id={card._id}
        type={card.type}
        link={card.link}
        title={card.title}
        
      />
    ) : null
  )
}

          </div>
        </div>
      </main>
      
      {/* Modal */}
      <AddContentModal open={modalState} onClose={() => setModal(false)} />
    </div>
  )
}
