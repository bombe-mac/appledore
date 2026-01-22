import { Button } from '../components/Button'
import { Plus } from '../icons/Plus'
import { Share } from '../icons/Share'
import { Card } from '../components/Card'
import AddContentModal from '../components/AddContentModal'
import { useState } from 'react'
import Sidebar from '../components/Sidebar'

export const Dashboard = () => {
     const [modalState, setModal] = useState(false);
  return (
    <div className='flex'>
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <main className='flex-1 ml-65 bg-gray-50'>
        {/* Header */}
        <header className='top-0 z-10'>
          <div className='flex justify-between items-center px-6 py-4'>
            <h1 className='font-semibold text-2xl text-gray-900'>All Notes</h1>
            <div className='flex gap-2'>
              <Button 
                size='sm' 
                text='Add content' 
                startIcon={<Plus size='md'/>} 
                onClick={() => setModal(true)}
              />
              <Button 
                size='sm' 
                text='Share' 
                startIcon={<Share size='md'/>} 
                onClick={() => {}}
              />
            </div>
          </div>
        </header>
        
        {/* Content Grid */}
        <div className='p-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-fr'>
            <Card 
              type='youtube' 
              link='https://www.youtube.com/watch?v=7WBZ_-2TZtE' 
              title='hkirat plans'
            />
            <Card 
              type='X' 
              link="https://twitter.com/Cristiano/status/2004967353130647961" 
              title='Twitter/X Post'
            />
          </div>
        </div>
      </main>
      
      {/* Modal */}
      <AddContentModal open={modalState} onClose={() => setModal(false)} />
    </div>
  )
}
