import { useState } from "react"
import type { ChangeEvent } from "react"

export type FilterOption<T extends Record<string, unknown>> = {
  key: keyof T
  label: string
  values: (items: T[]) => (string | number)[]
}

type UseMultFilterProps<T extends Record<string, unknown>> = {
  options: FilterOption<T>[]
  data: T[]
}

export function useMultiFilter<T extends Record<string, unknown>>(
  params: UseMultFilterProps<T>,
) {
  const { data, options } = params
  const [filterValue, setFilterValue] = useState(
    Object.fromEntries(options.map((option) => [option.key, ""])),
  )

const uniqueOptions: Record<string, (string | number)[]> = {}
Object.keys(filterValue).forEach((filter) => {
    const values = options
        .filter((option) => option.key === filter)
        .flatMap((option) => option.values(data))
        .filter((value) => value !== null && value !== undefined)
    uniqueOptions[filter] = Array.from(new Set(values))
})

const activeFilters = Object.entries(filterValue).filter(
    ([_, value]) => !!value,
)

  const filteredData =
    activeFilters.length > 0
      ? data.filter((item) =>
          activeFilters.every(
            ([key, value]) => item[key]?.toString() === value.toString(),
          ),
        )
      : data

  const handleFilter = (e: ChangeEvent<HTMLSelectElement>, key: string) => {
    const value = e.target.value
    setFilterValue((prev) => ({ ...prev, [key]: value }))
  }

  const resetFilter = (key: keyof T) => {
    setFilterValue((prev) => ({ ...prev, [key]: "" }))
  }

  return {
    data: filteredData,
    handleFilter,
    filter: filterValue,
    resetFilter,
    options: uniqueOptions,
  }
}