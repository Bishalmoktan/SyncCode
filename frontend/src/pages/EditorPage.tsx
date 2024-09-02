import Editor from "@/components/editor"
import Sidebar from "@/components/sidebar"

const EditorPage = () => {
  return (
    <div className="grid grid-cols-[250px_1fr]">
      <Sidebar />
      <Editor />
    </div>
  )
}
export default EditorPage