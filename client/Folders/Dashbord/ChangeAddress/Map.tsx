'use client'

import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap
} from 'react-leaflet'
import { customIcon } from './customIcon'
import { useEffect, useState } from 'react'
import { getAddress } from './getAddress'

function SyncCenter ({
  setPos,
  setAddress
}: {
  setPos: (pos: [number, number]) => void
  setAddress: (addr: string) => void
}) {
  const map = useMap()

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const update = () => {
      const center: LatLng = map.getCenter()
      const pos: [number, number] = [center.lat, center.lng]

      setPos(pos)

      // debounce برای جلوگیری از spam API
      clearTimeout(timeout)
      timeout = setTimeout(async () => {
        const addr = await getAddress(center.lat, center.lng)
        setAddress(addr)
      }, 600)
    }

    map.on('move', update)

    return () => {
      map.off('move', update)
      clearTimeout(timeout)
    }
  }, [map, setPos, setAddress])

  return null
}

export default function ChangeAddress () {
  const [position, setPosition] = useState<[number, number]>([32.4279, 53.688])
  const iranBounds: [[number, number], [number, number]] = [
    [25.0, 44.0], // جنوب غرب
    [40.0, 64.0] // شمال شرق
  ]
  const [address, setAddress] = useState<string>('')
  return (
    <div>
      <MapContainer
        center={position}
        zoom={7}
        maxBounds={iranBounds}
        maxBoundsViscosity={1.0}
        style={{ height: '400px', width: '100%' }}
      >
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        <SyncCenter setPos={setPosition} setAddress={setAddress} />
        <Marker position={position} icon={customIcon} />
      </MapContainer>
      <div style={{ marginTop: 10 }}>
        <div>Latitude: {position[0]}</div>
        <div>Longitude: {position[1]}</div>
        <div>Address: {address || 'loading...'}</div>
      </div>
    </div>
  )
}
