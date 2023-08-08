import BasicCard from '../components/ui/cards/BasicCard';

export default function Home() {
  return (
    <div className="flex flex-row justify-center p-4 m-5 space-x-6">
      <BasicCard
        label="SDPM Host"
        brief="Elevate your travels as a gracious car sharing host, offering wheels and warmth to wanderers from near and far."
        logo="/images/cs_host.png"
        content="Welcome to our car sharing host, where convenience meets community. Whether you're in need of a sleek city cruiser or a rugged adventure companion, our diverse fleet of well-maintained vehicles is at your fingertips, all supported by a network of friendly hosts ready to make your journey unforgettable."
        route="/host"
        tip="Become a SPDM Host"
      />
      <BasicCard
        label="SDPM Owner"
        brief="Empower change as a car sharing owner, sharing your wheels and shaping a greener, more connected world, one ride at a time."
        logo="/images/cs_owner.png"
        content="As a car sharing owner, you hold the key to effortless mobility and sustainable living. By sharing your well-maintained vehicle with responsible and respectful users, you not only earn extra income but also contribute to reducing traffic congestion and promoting a greener future for all."
        route="/owner"
        tip="Become a SPDM Owner"
      />
    </div>
  );
}
