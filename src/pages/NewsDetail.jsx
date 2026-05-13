import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MoreNews from '../components/MoreNews'
import HomeNews from '../components/HomeNews'
import { fetchNewsById } from '../api/endpoints'

export default function NewsDetail() {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let alive = true
    setLoading(true)
    fetchNewsById(id)
      .then((d) => { if (alive) setItem(d) })
      .catch(() => { if (alive) setItem(null) })
      .finally(() => { if (alive) setLoading(false) })
    return () => { alive = false }
  }, [id])

  if (loading) return null

  return (
    <>
      <MoreNews item={item} />
      <HomeNews />
    </>
  )
}
