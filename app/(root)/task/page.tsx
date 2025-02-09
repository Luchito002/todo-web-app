import Container from "../../../components/Container";

export default function Task() {
  return (
    <Container>
      <div className="mb-4">
        <h2 className="text-lg font-bold">Title</h2>
        <p className="text-sm">Description</p>
      </div>
      <div className="flex justify-between text-sm mb-4">
        <div>
          <p className="font-medium">Date Created</p>
          <p>2025-01-04</p>
        </div>
        <div>
          <p className="font-medium">Date Completed</p>
          <p>2025-01-05</p>
        </div>
      </div>

      <button className="w-full py-2 px-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300">
        Delete
      </button>
    </Container>
  )
}
