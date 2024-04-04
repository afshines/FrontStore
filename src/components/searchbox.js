
import '@/app/globals.css'

import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import {
  Input,
  Button,
  Autocomplete,
  AutocompleteSection,
  AutocompleteItem
} from "@nextui-org/react";

export default function Example({ data }) {
  const [groupfile, setGroup] = useState(null);
  const [car, selectCar] = useState(null);
  const [name, selectName] = useState(null);


  return (
    <div className=" top-2 sm:top-16  w-full pr-6 pl-6">
      <div className='grid grid-cols-4 gap-3 pt-[20px] sm:pt-[100px]'>
        <div className='col-span-4 sm:col-span-1'>
          <Input
           className='w-[100%] m-auto'
            label="نام محصول"
            onChange={(e) => { selectName(e.target.value) }}
          ></Input>

        </div>
        <div className='col-span-4 sm:col-span-1 '>
          <Autocomplete
          width={'100%'}
            label="گروه"
            className="w-[100%] m-auto"
            onSelectionChange={(event) => {
              console.log(event);
              setGroup(event)
            }}

            defaultItems={data.allgroups}
          >
            {(item) => <AutocompleteItem key={item.url}>{item.name}</AutocompleteItem>}
          </Autocomplete>


        </div>
        <div className='col-span-4 sm:col-span-1'>
          <Autocomplete
            label="خودرو"
            className="w-[100%] m-auto"
            onSelectionChange={(event) => {
              selectCar(event)
            }}

            defaultItems={data.vehiclelist}
          >
            {(item) => <AutocompleteItem key={item.url}>{item.name}</AutocompleteItem>}
          </Autocomplete>

        </div>

        <div className=' col-span-4 sm:col-span-1 '>

          <Button
            onClick={() => {
              var search = "?";
              if (name != null) {
                search = search + '&search=' + name;
              }
              if (car != null) {
                search = search + '&car=' + car;

              }
              if (groupfile != null) {
                search = search + '&group=' + groupfile;

              }

              window.location.assign(`/search${search}`);

            }}
            className='w-[100%] m-auto colorSecondaryBackground  h-[60px] text-white bg-stone-950'
          >جستجو</Button>
        </div>
      </div>
    </div>
  )
}
