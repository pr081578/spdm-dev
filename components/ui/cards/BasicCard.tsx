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
          <Image alt="logo" height={150} radius="sm" src={logo} width={150} />
          <div className="flex flex-col">
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
