export default function DashbordLayout ({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <div  > sidebar </div>
      <div className="bg-blue-400" > {children} </div>
    </div>
  )
}
