import React from 'react'
import { useParams } from 'react-router-dom'
function EventDetailPage() {
    const params = useParams();
  return (
    <div>EventDetailPage for for {params.eventId}</div>
  )
}

export default EventDetailPage