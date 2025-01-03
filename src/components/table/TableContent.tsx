import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import React, { memo, useEffect, useRef } from 'react';

import {
  Card
} from "@/components/ui/card";
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../ui/button';
import { Spinner } from '../ui/spinner';


export const TableContent = () => {

  const ref = useRef<HTMLTableElement>(null);

  useEffect(() => {
    //@ts-ignore
    ref.current?.parentNode?.setAttribute("style", `height:100%;`);
    //@ts-ignore
    ref.current?.parentNode.classList.add("naai-light-scrollbar");
  }, [])


  return (
    <div className='h-full w-full rounded-lg shadow-md overflow-auto scrollbar-hide bg-gray-600'>
      <Table className=" divide-y divide-gray-200" ref={ref}>
        <TableHeader className=" text-white sticky top-0 left-0 z-10">
          <TableRow className="hover:bg-transparent flex justify-around">
            <TableHead className="flex items-center text-left text-xs font-medium uppercase text-white">
              Rank
            </TableHead>
            <TableHead className="flex items-center text-left text-xs font-medium uppercase text-white">Roll Number</TableHead>
            <TableHead className="flex items-center text-white capitalize">
              UP
            </TableHead>
            <TableHead className="flex items-center text-left text-xs font-medium uppercase tracking-wider text-white">Name</TableHead>
            <TableHead className="flex items-center text-left text-xs font-medium uppercase tracking-wider text-white">
                Section
            </TableHead>
            <TableHead className="flex items-center text-left text-xs font-medium uppercase tracking-wider text-white">
              <div className="flex gap-1 items-center">
                <span className="cursor-pointer text-white">Total Solved</span>
                <div className="flex gap-0 items-center">
                    <FontAwesomeIcon icon={faSort} />
                </div>
              </div>
            </TableHead>
            <TableHead className="flex items-center text-left text-xs font-medium uppercase tracking-wider text-white">
              <div className="flex gap-1 items-center">
                <span className="cursor-pointer text-green-500">Easy</span>
                <div className="flex gap-0 items-center">
                    <FontAwesomeIcon icon={faSort} className="text-green-500" />
                </div>
              </div>
            </TableHead>
            <TableHead className="flex items-center text-left text-xs font-medium uppercase tracking-wider">
              <div className="flex gap-1 items-center">
                <span className="cursor-pointer text-yellow-500">Medium</span>
                <div className="flex gap-0 items-center text-white">
                    <FontAwesomeIcon icon={faSort} className="text-yellow-500"/>
                </div>
              </div>
            </TableHead>
            <TableHead className="flex items-center text-left text-xs font-medium uppercase tracking-wider">
              <div className="flex gap-1 items-center">
                <span className="cursor-pointer text-red-500">Hard</span>
                <div className="flex gap-0 items-center text-white">
                    <FontAwesomeIcon icon={faSort} className="text-red-500"/>
                </div>
              </div>
            </TableHead>
            <TableHead className="flex items-center text-center text-xs font-medium uppercase tracking-wider text-white">Last Active</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          { }
        </TableBody>
      </Table>
    </div>
  )
}

export const LoadTableWrapper = () => {
  const [data, setData] = React.useState({ isMounted: false, height: "100%", width: "100%" });
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setData((e) => ({ ...e, height: "100%", width: "100%", isMounted: false }));

      setTimeout(() => {
        let height = ref.current?.clientHeight ?? 0;
        let width = ref.current?.clientWidth ?? 0;
        setData((e) => ({ ...e, isMounted: true, height: `${height}px`, width: `${width}px` }));
      }, 100);
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Card ref={ref} className="bg-inherit border-0 relative" style={{ width: data.width, height: data.height }}>
      {
        (data.isMounted) ?
          <TableContent />
          : null
      }
      <OverLayLoading />
    </Card>
  )
}

const OverLayLoading = memo(() => {
  // const isCustomerOverlayLoading = useRecoilValue(isCustomerOverlayLoadingSelector);
  const isCustomerOverlayLoading = false;

  return (
    <>
      {
        (isCustomerOverlayLoading ?? false) ?
          <div className="absolute top-0 left-0 flex items-center justify-center backdrop-blur-[0.5px] h-full w-full z-[100]">
            <div className="p-1 rounded-full bg-primary flex flex-col items-center justify-center">
              <Spinner></Spinner>
            </div>
          </div>
          : null
      }
    </>
  )
})
