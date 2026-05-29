'use client'

import { useEffect } from 'react'

interface WistiaPlayerProps {
  mediaId: string
  aspect: number // width/height ratio — ex: 1.777 pour 16:9, 0.575 pour 9:16
  className?: string
}

export default function WistiaPlayer({ mediaId, aspect, className }: WistiaPlayerProps) {
  useEffect(() => {
    // Charge player.js une seule fois (vérifie si déjà présent)
    if (!document.querySelector('script[data-wistia-player]')) {
      const playerScript = document.createElement('script')
      playerScript.src = 'https://fast.wistia.com/player.js'
      playerScript.async = true
      playerScript.setAttribute('data-wistia-player', '1')
      document.head.appendChild(playerScript)
    }

    // Charge le script propre à cette vidéo (type module requis par Wistia)
    const mediaScript = document.createElement('script')
    mediaScript.src = `https://fast.wistia.com/embed/${mediaId}.js`
    mediaScript.async = true
    mediaScript.type = 'module'
    document.head.appendChild(mediaScript)

    return () => {
      mediaScript.remove()
    }
  }, [mediaId])

  const paddingTop = `${((1 / aspect) * 100).toFixed(2)}%`

  return (
    <div className={className}>
      <style dangerouslySetInnerHTML={{ __html: `
        wistia-player[media-id='${mediaId}']:not(:defined) {
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch');
          display: block;
          filter: blur(5px);
          padding-top: ${paddingTop};
        }
        wistia-player[media-id='${mediaId}'] {
          display: block;
          width: 100%;
        }
      `}} />
      <div
        dangerouslySetInnerHTML={{
          __html: `<wistia-player media-id="${mediaId}" aspect="${aspect}"></wistia-player>`,
        }}
      />
    </div>
  )
}
