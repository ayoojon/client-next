import { server } from '@/config/index'
import { IService } from '@/types/service'
import Axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ServiceCard } from '../Cards/ServiceCard'

interface Props {
    services: IService[],
}

export default function RelatedServices({services}: Props) {
    // const [affServices, setAffServices] = useState<IService[]>([])

    // const fetchAffServices = async () => {
    //     const res = await Axios.get(`${server}/related/${type}`)
    //     console.log(res.data, 'data')
    // }
    
    // useEffect(() => {
    //     if(services.length === 0) {
    //         fetchAffServices()
    //     }
    // }, [services])

    return (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <Link key={service._id} href={`/services/${service.url}`}>
              <a>
                <ServiceCard key={service._id} service={service} />
              </a>
            </Link>
          ))}
        </div>
    )
}
