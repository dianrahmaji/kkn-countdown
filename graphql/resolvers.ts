export const resolvers = {
  Query: {
    guestbooks: () => {
      return [
        {
          id: 1,
          body: "Hello",
          author: "Dian Rahmaji",
          placement: "Sukabumi"
        }
      ]

    }
  }
}
