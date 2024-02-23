import Logo from "@/assets/Logo.png";

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
<div className="justify-content mx-auto md:flex w-5/6 gap-16">
<div className="mt-16 basis-1/2 md:mt-0">
<img alt="logo" src={Logo}/>
<p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quia, ut numquam earum laboriosam natus corrupti accusantium eligendi rerum, assumenda ad doloremque suscipit corporis totam molestias maxime aut! Quos, qui?.</p>
<p>© Evogym All Rights Reserved</p>
</div>
<div className="mt-16 basis-1/4 md:mt-0  ">
  <h4 className="font-bold">Links</h4>
  <p className="my-5 ">Massa orci senectus</p>
  <p className="my-5 ">Et gravida id etiam </p>
  <p>Ullamcorper vivamus</p>
</div>
<div className="mt-16 basis-1/4 md:mt-0  ">
  <h4 className="font-bold">Contact Us</h4>
  <p className="my-5 ">tempest espiritus sanctus voluptat sirim.</p>
  <p>(333)425-6825</p>
</div>
</div>
    </footer>
  )
}

export default Footer