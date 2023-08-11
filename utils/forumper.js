export async function getForumContentByPostCategory(postCategory) {
  try {
    const response = await fetch(
      `${process.env.API_SERVER}/forum?postcategory_sid=${postCategory}`
    )
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching forum content:', error)
    return null
  }
}
