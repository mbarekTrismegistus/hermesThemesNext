import { Button, CardFooter } from '@nextui-org/react';
import About from './components/about';
import {Card, CardHeader, CardBody} from "@nextui-org/react";
import Image from 'next/image';
import Projects from './components/projects'
export default function Home() {
  return (
    <div>
      <div className="d-flex flex-column align-items-center text-center herosection">
        <div className='herosectionContent col-9'>
          <h1>
            Creating innovative web solutions for your needs
          </h1>
          <p className="my-5">With a passion for coding and a keen eye for design, I bring your ideas to life.</p>
          <div className='mt-3'>
            <Button className='mx-2' variant='shadow' color='primary'>
              Learn More
            </Button>
            <Button className='mx-2' variant='bordered' color='secondary'>
              Learn More
            </Button>
          </div>
        </div>
        
      </div>
      <About/>
      <div className='serviceSec col-10 mx-auto'>
        <h1 className='text-center text-4xl font-extrabold mb-5 w-50 mx-auto'>
          Building Innovative and User-Friendly Web Applications
        </h1>
        <p className='text-center w-75 my-3 mx-auto'>With expertise in front-end, back-end, database management, and deployment, I create seamless and efficient web solutions that meet the needs of businesses and users alike.</p>
        <div className='row pt-5'>
          <div className='col-md my-3'>
          <Card className="py-4 dark ">
              <CardBody className="overflow-hidden py-2">
                <Image
                  alt="Card background"
                  className="object-contain mx-auto w-50 rounded-xl"
                  src="/fe.png"
                  height={200}
                  width={200}
                />
              </CardBody>
              <CardFooter className="pb-0 pt-5 px-5 text-center flex-col items-center">
                <p className="text-2xl uppercase font-bold">Front-End Development</p>
                <small>Crafting engaging and responsive user interfaces.</small>
              </CardFooter>
            </Card>
          </div>
          <div className='col-md my-3'>
          <Card className="py-4 dark">
              <CardBody className="overflow-hidden py-2">
                <Image
                  alt="Card background"
                  className="object-contain mx-auto w-50 rounded-xl"
                  src="/be.png"
                  height={200}
                  width={200}
                />
              </CardBody>
              <CardFooter className="pb-0 pt-5 px-5 text-center flex-col items-center">
                <p className="text-2xl uppercase font-bold">Front-End Development</p>
                <small>Crafting engaging and responsive user interfaces.</small>
              </CardFooter>
            </Card>
          </div>
          <div className='col-md my-3'>
          <Card className="py-4 dark">
              <CardBody className="overflow-hidden py-2">
                <Image
                  alt="Card background"
                  className="object-contain mx-auto w-50 rounded-xl"
                  src="/db.png"
                  height={200}
                  width={200}
                />
              </CardBody>
              <CardFooter className="pb-0 pt-5 px-5 text-center flex-col items-center">
                <p className="text-2xl uppercase font-bold">Front-End Development</p>
                <small>Crafting engaging and responsive user interfaces.</small>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      <Projects/>
    </div>
  );
}
