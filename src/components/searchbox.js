
import '@/app/globals.css'

import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'


export default function Example({ data }) {
  const [groupfile, setGroup] = useState(null);
  const [car, selectCar] = useState(null);
  const [name, selectName] = useState(null);


  return (
    <div className=" top-16 w-full pr-6 pl-6">
      <div className='grid grid-cols-4 gap-3 pt-[100px]'>
        <div className='col-span-4 sm:col-span-1'>
          <div className='font-bold text-white'>نام:</div>
          <input
            onChange={(e) => { selectName(e.target.value) }}
            className='w-full  mt-1 h-[34px]  rounded-[5px]'
          ></input>
        </div>
        <div className='col-span-4 sm:col-span-1 '>
          <Combobox value={groupfile} onChange={setGroup}>

            <Combobox.Label className={`text-white font-bold`}>گروه:</Combobox.Label>

            <div className="relative mt-1">
              <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                <Combobox.Input
                  className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                  onChange={(event) => setGroup(event.target.value)}
                  value={groupfile != null ? groupfile.name : null}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Combobox.Button>
              </div>
              <Transition

                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"

              >

                <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                  {data.allgroups.length === 0 ? (
                    <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                      یافت نشد
                    </div>
                  ) : (
                    data.allgroups.map((person) => (

                      <Combobox.Option
                        key={person.id}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-teal-600 text-white' : 'text-gray-900'
                          }`
                        }
                        value={person}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                }`}
                            >
                              {person.name}
                            </span>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                                  }`}
                              >
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            </div>
          </Combobox>
        </div>
        <div className='col-span-4 sm:col-span-1'>
          <Combobox value={car} onChange={selectCar}>
            <Combobox.Label className={`text-white font-bold`}>خودرو:</Combobox.Label>

            <div className="relative mt-1">
              <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                <Combobox.Input
                  className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                  onChange={(event) => selectCar(event.target.value)}
                  value={car != null ? car.name : null}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Combobox.Button>
              </div>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                  {data.vehiclelist.length === 0 ? (
                    <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                      یافت نشد
                    </div>
                  ) : (
                    data.vehiclelist.map((person) => (
                      <Combobox.Option
                        key={person.id}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-teal-600 text-white' : 'text-gray-900'
                          }`
                        }
                        value={person}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                }`}
                            >
                              {person.name}
                            </span>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                                  }`}
                              >
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            </div>
          </Combobox>
        </div>

        <div className='mt-1 col-span-4 sm:col-span-1 pt-6'>
          <button
            onClick={() => {
              var search = "?";
              if (name != null) {
                search = search + '&search=' + name;
              }
              if (car != null) {
                search = search + '&car=' + car.url;

              }
              if (groupfile != null) {
                search = search + '&group=' + groupfile.url;

              }

              window.location.assign(`/search${search}`);

            }}

            className='w-full colorSecondaryBackground  Rectangle6 h-[34.29px] rounded-[5px] text-white bg-stone-950'>جستجو</button>
        </div>
      </div>
    </div>
  )
}
