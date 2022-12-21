import React from 'react'
import { Images } from '../../assets'
export const Logos = () => {
  const { atlassian, dropbox, google, shopify, slack } = Images

  const Img = [
    { name: atlassian, url: 'https://www.atlassian.com/' },
    { name: dropbox, url: 'https://www.dropbox.com/' },
    { name: google, url: 'https://www.google.com/' },
    { name: shopify, url: 'https://www.shopify.com/' },
    { name: slack, url: 'https://slack.com/' },
  ]

  return (
    <div className="my-7 flex align-middle justify-between gap-5 md:w-4/5 mx-auto">
      {Img.map(({name, url}, index) => (
        <a href={url} key={index} target="_blank" rel="noopener noreferrer">
          <img src={name} alt="Comapnies Logos" className="" />
        </a>
      ))}
    </div>
  )
}
