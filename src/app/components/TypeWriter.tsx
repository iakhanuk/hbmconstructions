"use client"

import React from 'react'
import Typewriter from "typewriter-effect";

const TypeWriterEffect = ({strings, cursor}:{strings:string[], cursor?:string}) => {
  return (
    <Typewriter
    options={{
      strings: strings,
      autoStart: true,
      loop: true,
      cursor: cursor || "|",

    }}
  />
  )
}

export default TypeWriterEffect