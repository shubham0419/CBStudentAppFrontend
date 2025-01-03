"use client"
import { useParams } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button';
import { HardDriveDownload } from 'lucide-react';
import { LoadTableWrapper } from '@/components/table/TableContent';


const Page = () => {
  const params = useParams();
  const id = params?.id as string | null;

  return (
    <div className='m-10 bg-gray-800 p-5 rounded-lg h-[90vh] flex flex-col gap-2'>
      <div className='flex justify-between w-full items-center'>
        <h2 className='text-2xl font-semibold'>{id}</h2>
        <div className='flex gap-2'>
          <Select defaultValue='all_sections'>
            <SelectTrigger className='border-0 bg-gray-600'>
              <SelectValue placeholder="Select Section" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all_sections">All Sections</SelectItem>
              {/* loop for sections */}
            </SelectContent>
          </Select>
          <Button className='bg-blue-500 hover:bg-blue-500'><HardDriveDownload/>Export to CSV</Button>
        </div>
      </div>
      <div className='h-full w-full'>
        <LoadTableWrapper/>
      </div>
    </div>
  )
}

export default Page