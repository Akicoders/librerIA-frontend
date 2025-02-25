import { createPortal } from 'react-dom'
import { Blendy, createBlendy } from 'blendy'
import React, { useEffect, useRef, useState } from "react";
import '../../components/ui/myBooks.css'

interface ButtonBlendy {
    button: React.ReactNode
    modal: React.ReactNode
    id: number | string
}



export function ButtonBlendy( { button, modal, id }: ButtonBlendy) {  
    const blendyId = `example-${id}`
    const blendy = useRef<Blendy | null>(null)
    const[showModal, setShowModal] = useState(false)
    
    useEffect(() =>{
        blendy.current = createBlendy({animation: 'dynamic'})
    }, [])


    return (
        <div>

        {showModal
        && createPortal(<Modal onClose={() => {
          blendy.current?.untoggle(blendyId, () => {
            setShowModal(false)
          })
        }}></Modal>, document.body)
        }
        <button className="button focus:outline-none" data-blendy-from={blendyId} onClick={() => {
                setShowModal(true)
                blendy.current?.toggle(blendyId)
                }}>{button}</button>
        
        </div>
        
    )

    function Modal({ onClose }: { onClose: React.MouseEventHandler<HTMLElement> }) {
        return (
          <div className="modal  text-black" data-blendy-to={blendyId}>
                <button className="modal__close" onClick={onClose}></button>
                {modal}
          </div>
        )
    }
}