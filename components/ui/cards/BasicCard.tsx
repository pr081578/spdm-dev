'use client';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Link,
  Tooltip,
} from '@nextui-org/react';

interface BasicCardProps {
  label: string;
  brief?: string;
  content: string;
  logo: string;
  route: string;
  tip?: string;
}
export default function BasicCard({
  label,
  brief,
  content,
  logo,
  route,
  tip,
}: BasicCardProps) {
  return (
    <Tooltip showArrow={true} content={tip}>
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <Image alt="logo" height={500} src={logo} width={500} />
          <div className="flex flex-col pt-0">
            <p className="text-md">{label}</p>
            <p className="text-small text-default-500">{brief}</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>{content}</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link isExternal showAnchorIcon href={route}>
            Learn More
          </Link>
        </CardFooter>
      </Card>
    </Tooltip>
  );
}
{
  /*
<div className="flex flex-row justify-center p-4 m-5 space-x-6">
      <BasicCard
        label="SDPM Owner"
        brief="Empower change as a car sharing owner, sharing your wheels and shaping a greener, more connected world, one ride at a time."
        logo="/images/9.png"
        content="As a car sharing owner, you hold the key to effortless mobility and sustainable living. By sharing your well-maintained vehicle with responsible and respectful users, you not only earn extra income but also contribute to reducing traffic congestion and promoting a greener future for all."
        route="/owner"
        tip="Become a SPDM Owner"
      />
      <BasicCard
        label="SDPM Host"
        brief="Elevate your travels as a gracious car sharing host, offering wheels and warmth to wanderers from near and far."
        logo="/images/8.png"
        content="Welcome to our car sharing host, where convenience meets community. Whether you're in need of a sleek city cruiser or a rugged adventure companion, our diverse fleet of well-maintained vehicles is at your fingertips, all supported by a network of friendly hosts ready to make your journey unforgettable."
        route="/host"
        tip="Become a SPDM Host"
      />
    </div>


*/
}
