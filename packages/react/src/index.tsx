import React from "react"

import "@/styles/miti.css"

import Header from "@/components/miti/header"
import { MitiContext } from "@/hooks/use-miti"

type MitiProps = {
  title: string
}

const Miti: React.FC<MitiProps> = ({ title }) => {
  return (
    <MitiContext.Provider value={undefined}>
      <div id="miti-contaner">
        <Header title={title} />
      </div>
    </MitiContext.Provider>
  )
}

export default Miti
