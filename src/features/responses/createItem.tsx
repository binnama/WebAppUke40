import type { CreateResponses, DummyItem } from "./types"

const dummyTitles: string[] = [
  "Sneezing Umbrella",
  "Spaghetti Slippers",
  "Cookie Toaster",
  "Pizza-Fueled Jetpack",
  "Instant Ice Cream Dispenser",
  "Snuggle Shoes",
  "Giggle Glasses",
  "Chuckle Chair",
  "Sock-Eating Sofa",
  "Pet Translator Hat",
]

const dummyDescriptions: string[] = [
  "Keep your whiskers warm with every sip! This mug comes with a built-in cozy for your nose, ensuring your coffee stays hot and your mustache stays toasty.",
  "Carry your essentials in style! This backpack boasts a plush llama backrest for extra comfort and alpaca-inspired fashion.",
  "Start your mornings with a flip and a glow! This pancake flipper lights up your breakfast routine, making flipping flapjacks a mesmerizing spectacle.",
  "This candy-lover's dream weapon shoots out giant, chewable bubbles that create a sticky, sugary spectacle. Watch out, villains, the Bubblegum Bazooka is here!",
  "Enjoy a night of uninterrupted sleep with these pajamas that are 100% tickle-proof. Say goodbye to bedtime pranks from mischievous friends!",
  "Blast off into the future with these sneakers that have built-in jet engines. Get ready for a gravity-defying commute to work!",
  "Keep the monsters at bay with the soft, comforting glow of a Gummy Bear Nightlight. Sweet dreams guaranteed!",
  "Get a trendy new 'do from our Hedgehog Hairstylist! These prickly professionals are experts at spiky, stylish haircuts.",
  "Sink into the Squishy Sofa, where every cushion feels like a giant marshmallow hug. Perfect for Netflix marathons and nap enthusiasts.",
  "Need a wingman for your next party? The Penguin Butler serves drinks with a tuxedo-clad flair and a beakful of charm.",
]

const dummyPrices: number[] = [399, 449, 21, 42, 963, 599, 820, 999]

const dummyCategory: string[] = [
  "Glasses",
  "Furniture",
  "Plant",
  "Planet in the Solar System",
  "Animal",
]

//const getRandomItem = <T>(items: T[]) => {
const getRandomItem = (items: any[]) => {
  const randomIndex = Math.floor(Math.random() * items.length)

  return items[randomIndex]
}

const getRandomId = () => {
  return Math.random().toString(36).slice(2)
}

export const dummy: DummyItem = {
  id: () => getRandomId(),
  title: () => getRandomItem(dummyTitles),
  description: () => getRandomItem(dummyDescriptions),
  price: () => getRandomItem(dummyPrices),
  category: () => getRandomItem(dummyCategory),
  amount: () => 0
}

const createResponses: CreateResponses = ({
  existingResponses,
  count,
  dummy,
}) => {
  const responses = new Map(existingResponses)

  if (responses.size === 0 && count === 0) {
    throw new Error("No response added")
  }

  for (let i = 0; i < count; i++) {
    const response = {
      id: dummy.id(),
      title: dummy.title(),
      description: dummy.description(),
      price: dummy.price(),
      category: dummy.category(),
      amount: dummy.amount(),
    }

    responses.set(`response-${i}`, response)
  }
  return responses
}

export { createResponses, getRandomId }
