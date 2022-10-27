import React, { useState, useEffect } from 'react'
import { Exit } from '../components/exit'
import YoutubeContent from './YoutubeContent'

//! https://www.googleapis.com/youtube/v3/search?maxResults=12&key=AIzaSyCJldMchAktkYXNTMxih-fZ3hQwxzI6FMo q=trancemusic|react|dogs|space

const API = 'AIzaSyCJldMchAktkYXNTMxih-fZ3hQwxzI6FMo'
const maxRes = 12
const myURL = `https://www.googleapis.com/youtube/v3/search?maxResults=${maxRes}&key=${API}&q=trancemusiс|asot|vocaltrance&order=date`

export default function SearchInput() {
  const [value, setValue] = useState('')
  const [search, setSearch] = useState([])
  const [addValid, setAddValid] = useState(false)

  useEffect(() => {
    if (value === '' || value.trim() === '') {
      setAddValid(false)
    }
    return () => {
      setAddValid(true)
    }
  }, [addValid, value])

  function formSubmit(e) {
    e.preventDefault()
    
    fetch(myURL)
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        const search = json.items.map(
          (item) => `https://www.youtube.com/embed/${item.id.videoId}`
        )
        setSearch(search)
        // console.log(search)
        console.log(myURL)
      })
      .catch((error) => {
        console.error(error)
      })

      localStorage.setItem('search', JSON.stringify(value))
  }

  return (
    <div>
      <div className="iconList">
        <Exit />
      </div>
      <div className="searchForm">
        <form onSubmit={formSubmit}>
          <input
            id="search"
            type="search"
            placeholder="asot"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />{' '}
          <button
            className="btn btn-primary"
            disabled={!addValid}
            type="submit"
            style={{ cursor: 'pointer' }}
          >
            Search
          </button>
        </form>
      </div>
      <div>
        <YoutubeContent search={search} />
      </div>
    </div>
  )
}
