import { atom, selector } from "recoil";

export const bookingAtom = atom({
  key:"bookingAtom",
  default: {
    progress:0,
    cartTotal:{
      original:0,
      discounted:0
    },
    availableSlots:[[""]],
    selectedDate:new Date(),
    selectedArtistService:[] as selectedArtistServiceType[],
    isOverLayLoading:false,
    bookingContineLoading:false,
  } as bookingAtomTypr
})

// diaolge selector
export const bookingDialogSelector = selector<boolean>({
  key:"bookingDialogSelector",
  get:({get})=>{
    const data = get(bookingAtom)
    return data.openDialoge ?? false;
  },
  set:({set},newVal)=>{
    set(bookingAtom,(prev)=>({
      ...prev,
      openDialoge:newVal as boolean
    }))
  }
})

// date selector
export const bookingDateSelector = selector<Date>({
  key:"bookingDateSelector",
  get:({get})=>{
    const data = get(bookingAtom)
    return data.selectedDate ?? new Date();
  },
  set:({set},newVal)=>{
    set(bookingAtom,(prev)=>({
      ...prev,
      selectedDate:newVal as Date
    }))
  }
})

// avialable slots selector
export const availableSlotsSelector = selector<string[][]>({
  key:"availableSlotsSelector",
  get:({get})=>{
    const data = get(bookingAtom);
    return data.availableSlots ?? [[]];
  },
  set:({set},newVal)=>{
    set(bookingAtom,(prev)=>({
      ...prev,
      availableSlots: newVal as string[][]
    }))
  }
});

// booking date selector
export const bookingSlotsSelector = selector<string[]>({
  key:"bookingSlotsSelector",
  get:({get})=>{
    const data = get(bookingAtom);
    return data.selectedTime ?? [];
  },
  set:({set},newVal)=>{
    set(bookingAtom,(prev)=>({
      ...prev,
      selectedTime:newVal as string[]
    }))
  }
})

// multiple artist booking select
export const selectedArtistServiceSelector = selector<selectedArtistServiceType[]>({
  key:"selectedArtistServiceSelector",
  get:({get})=>{
    const data = get(bookingAtom);
    return data.selectedArtistService ?? [];
  },
  set:({set},val)=>{
    set(bookingAtom,(prev)=>({
      ...prev,
      selectedArtistService:val as selectedArtistServiceType[]
    }))
  }
});

// booking scedule selector
export const bookingScheduleSelector = selector<TimeSlotResType | undefined>({
  key:"bookingScheduleSelector",
  get:({get})=>{
    const data = get(bookingAtom);
    return data.sceduleAppointment ?? undefined;
  },
  set:({set},newVal)=>{
    set(bookingAtom,(prev)=>({
      ...prev,
      sceduleAppointment:newVal as TimeSlotResType 
    }))
  }
})

// makeAppointment selector
export const makeAppointmentSelector = selector<MakeAppointmentResType | undefined>({
  key:"makeAppointmentSelector",
  get:({get})=>{
    const data = get(bookingAtom);
    return data.makeAppointment ?? undefined;
  },
  set:({set},newVal)=>{
    set(bookingAtom,(prev)=>({
      ...prev,
      makeAppointment:newVal as MakeAppointmentResType
    }))
  }
})

// Appointed Artist selector
export const appointedArtistSelector = selector<SingleSalonArtistDataType[] | undefined>({
  key:"appointedArtistSelector",
  get:({get})=>{
    const data = get(bookingAtom);
    return data.appointmentArtists ?? [];
  },
  set:({set},val)=>{
    set(bookingAtom,(prev)=>({
      ...prev,
      appointmentArtists:val as SingleSalonArtistDataType[]
    }))
  }
})

// progress
export const progressSelector = selector<number>({
  key:"progressSelector",
  get:({get})=>{
    const data = get(bookingAtom);
    return data.progress ?? 0;
  },
  set:({set},val)=>{
    set(bookingAtom,(prev)=>({
      ...prev,
      progress:val as number
    }))
  }
});

// cart total
export const cartTotalSelector = selector<cartTotalType>({
  key:"cartTotalSelector",
  get:({get})=>{
    const data = get(bookingAtom);
    return data.cartTotal ?? {original:0,discounted:0};
  },
  set:({set},val)=>{
    set(bookingAtom,(prev)=>({
      ...prev,
      cartTotal:val as cartTotalType
    }))
  }
})



// artist selection type
export const selctedArtistTypeSelector = selector<artistSelectionType>({
  key:"selctedArtistType",
  get:({get})=>{
    const data = get(bookingAtom);
    return data.artistSelectionType ?? undefined;
  },
  set:({set},val)=>{
    set(bookingAtom,(prev)=>({
      ...prev,
      artistSelectionType:val as artistSelectionType
    }))
  }
})

// booking overlay loading selector
export const bookingOverlayLoadingSelector = selector<boolean>({
  key:"bookingOverlayLoadingSelector",
  get:({get})=>{
    const data = get(bookingAtom);
    return data.isOverLayLoading ?? false;
  },
  set:({set},val)=>{
    set(bookingAtom,(prev)=>({
      ...prev,
      isOverLayLoading:val as boolean
    }))
  }
})

// boooking contine loading selector
export const bookingContinueLoadingSelector = selector<boolean>({
  key:"bookingContinueLoadingSelector",
  get:({get})=>{
    const data = get(bookingAtom);
    return data.bookingContineLoading ?? false;
  },
  set:({set},val)=>{
    set(bookingAtom,(prev)=>({
      ...prev,
      bookingContineLoading:val as boolean
    }))
  }
})