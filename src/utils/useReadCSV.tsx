import React, { useEffect, useState } from 'react'
import Papa, { ParseResult } from 'papaparse'

type Item = {
  description?: string,
  id: string,
  image: string,
  name: string
}

// type Items = Item[]
// store.dispatch(fetchItems());

const useReadCSV = () =>  {
  const [csvData, setCSVData] = React.useState<unknown[]>([])

  useEffect(() => {
    const csvFilePath = './unith_test_data.csv'
  })

  const getCSV = () => {
    Papa.parse('../asset')
  }
  return 1
}

export default useReadCSV