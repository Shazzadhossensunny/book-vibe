import { Link } from "react-router-dom";


export default function ErrorPage() {
  return (
    <div className="h-screen lg:h-[800px] container mx-auto">
        <img className="h-full w-full" src={"/error.jpg"} alt="" />
        <div className="text-center">
          <Link to={'/'}>
             <button className="btn btn-primary">Go Home</button>
          </Link>
        </div>
    </div>
  )
}
