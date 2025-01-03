"use client"
import React from 'react'
import { RecoilRoot } from 'recoil';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas);

export default function StoreProvider({children}: {children: React.ReactNode}){
    return <RecoilRoot>{children}</RecoilRoot>;
}