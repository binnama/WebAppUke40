"use client";

import { useEffect, useState } from "react";



import CardItem from "@/components/CardItem";
import Cards from "@/components/Cards";
import { dummy } from "@/features/responses/createItem";
import { type Response } from "@/features/responses/types";
import { FilterOption, useMultiFilter } from "@/hooks/useFilter";


export default function Products() {
  const [responses, setResponses] = useState<Response[]>([])

  const filterOptions: FilterOption<Response>[] = [
    {
      key: "category",
      label: "Kategori",
      values: (items) => items.map((item) => item.category),
    },
  ]

    const { data, handleFilter, filter, resetFilter, options } =
    useMultiFilter<Response>({
      options: filterOptions,
      data: responses,
    })



  useEffect(() => {
    const getResponses = async () => {
      const response = await fetch("/api/responses", {
        method: "get",
      })

      const result = (await response.json()) as { data: Response[] }
      setResponses(result.data)
    }
    getResponses()
  }, [])

  const addItemToCart = (idToAdd: string) => {
    console.log("Added")
    const itemToAdd = responses.find((item) => item.id === idToAdd);

  if (itemToAdd) {
    // Create a new array by spreading the existing data and adding the new item
    setResponses((prevResponses) => [...prevResponses, itemToAdd]);
  }
  }

  const deleteItemFromCart = (id: string) => {
    console.log("Delete")
    setResponses((prev) => prev.filter((response) => response.id !== id))
  }

const increaseItemsInCart = (id: string) => {
  setResponses((prevResponses) => {
    return prevResponses.map((response) => {
      if (response.id === id) {
        // Increase the quantity of the specific item
        return { ...response, amount: (response.amount || 1) + 1 };
      }
      return response;
    });
  });
};
  
  const decreaseItemsInCart = (id: string) => {
  setResponses((prevResponses) => {
    return prevResponses.map((response) => {
      if (response.id === id) {
        // Decrease the quantity of the specific item, but ensure it's not negative
        const newAmount = (response.amount || 1) - 1;
        return { ...response, quantity: newAmount >= 0 ? newAmount : 0 };
      }
      return response;
    });
  });
};

  const RandCount = () => {
    return Math.floor(Math.random() * 10) + 1
  }

  const count = RandCount()
  //const dummyElements = Array.from({ length: count }, (_, index) => index)

  return (
    <div>
      <Cards>
      {data.map((response) => (
        <CardItem key={response.id} onAdd={addItemToCart} {...response} />
      ))}
      </Cards>
    </div>
    /*
    <div>
      <h1>HomePage</h1>
      {dummyElements.map((_, index) => (
        <div key="{index}">
          <h2>ItemTitle: {dummy.title()}</h2>
          <p>Description: {dummy.description()}</p>
          <p>Price: {dummy.price()}</p>
          <p>Category: {dummy.category()}</p>
        </div>
      ))}
    </div>
    */

    /*
    <Cards>
      <main>
        <CardItem 
        {data}
        key={response.id}
        onAdd={addItemToCart}
        {...response}
        />
      </main>

    </Cards>
    <main>
      <h1>Hellå</h1>
      <Cards />
    </main>
    */
  )
      
}