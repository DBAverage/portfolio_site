import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import projectImage from "../public/containers.jpg"

const KubernetesHomeLab: NextPage = () => {
  return (
    <div>
      <Image src={projectImage} />
      <div>All the deets on my kubernetes home lab</div>
      <div className='mt-6'>
        <Link href="/">
          <a className="font-bold underline hover:text-indigo-600">Back</a>
        </Link>
      </div>
    </div>

  )
}

export default KubernetesHomeLab
