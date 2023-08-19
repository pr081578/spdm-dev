const { PrismaClient } = require('@prisma/client');
const { hash } = require('bcrypt');

const prisma = new PrismaClient();

interface CreateUserProps {
  email: String;
  name: String;
  password: String;
}

async function createUser({ email, name, password }: CreateUserProps) {
  await prisma.user.deleteMany();
  // you will write your Prisma Client queries here
  const user = await prisma.user.upsert({
    where: { email: email },
    update: {},
    create: {
      email,
      name,
      password: await hash(password, 12),
    },
  });
  if (user) {
    console.log('User: ', { user });
  }
  return user;
}

interface CreateHostProps {
  user: any;
  address: any;
}

async function createHost({ user, address }: CreateHostProps) {
  await prisma.host.deleteMany();
  // ... you will write your Prisma Client queries here
  await prisma.host.upsert({
    where: { userId: user.id },
    update: {},
    create: {
      User: { connect: { id: user.id } },
      PhysicalAddress: { connect: { id: address.id } },
    },
  });
  const host = await prisma.host.findFirst({
    where: {
      userId: user.id,
    },
  });

  if (host) {
    console.log('Host: ', { host });
  }
  return host;
}

interface CreatePhysicalAddressProps {
  address: String;
  city: String;
  state: String;
  country: String;
  zipCode: String;
}

async function createPhysicalAddress({
  address,
  city,
  state,
  country,
  zipCode,
}: CreatePhysicalAddressProps) {
  await prisma.physicalAddress.deleteMany();
  // ... you will write your Prisma Client queries here
  const physicalAddress = await prisma.physicalAddress.upsert({
    where: {
      address_city_state_country_zipCode: {
        address,
        city,
        state,
        country,
        zipCode,
      },
    },
    update: {},
    create: {
      address,
      city,
      state,
      country,
      zipCode,
    },
  });
  if (physicalAddress) {
    console.log('PhysicalAddress: ', { physicalAddress });
  }
  return physicalAddress;
}

interface CreateOwnerProps {
  user: any;
  address: any;
}

async function createOwner({ user, address }: CreateOwnerProps) {
  await prisma.owner.deleteMany();
  // ... you will write your Prisma Client queries here
  await prisma.owner.upsert({
    where: { userId: user.id },
    update: {},
    create: {
      User: { connect: { id: user.id } },
      PhysicalAddress: { connect: { id: address.id } },
    },
  });
  const owner = await prisma.owner.findFirst({
    where: {
      userId: user.id,
    },
  });

  if (owner) {
    console.log('Owner: ', { owner });
  }

  return owner;
}

interface CreateVehicleProps {
  vin: String;
  registrationNumber: String;
  make: String;
  model: String;
  trim: String;
  year: Number;
  city: String;
  state: String;
  country: String;
  zipCode: String;
  mileage: Number;
  vuel: String;
  gasGrade: String;
  cityMPG: Number;
  hwyMPG: Number;
  driveTrain: String;
  seatCount: Number;
  description: String;
  color: String;
  host?: any;
  owner: any;
  physicalAddress: any;
  deliverAddress: any;
  receiveAddress: any;
  hostInsurance?: any;
}

async function CreateVehicle({
  vin,
  registrationNumber,
  make,
  model,
  trim,
  year,
  city,
  state,
  country,
  zipCode,
  mileage,
  vuel,
  gasGrade,
  cityMPG,
  hwyMPG,
  driveTrain,
  seatCount,
  description,
  color,
  host,
  owner,
  physicalAddress,
  deliverAddress,
  receiveAddress,
  hostInsurance,
}: CreateVehicleProps) {
  await prisma.vehicle.deleteMany();
  // ... you will write your Prisma Client queries here
  const vehicle = await prisma.vehicle.upsert({
    where: { vin: vin },
    update: {},
    create: {
      vin: vin,
      registrationNumber: registrationNumber,
      make: make,
      model: model,
      trim: trim,
      year: year,
      city: city,
      state: state,
      country: country,
      zipCode: zipCode,
      mileage: mileage,
      vuel: vuel,
      gasGrade: gasGrade,
      cityMPG: cityMPG,
      hwyMPG: hwyMPG,
      driveTrain: driveTrain,
      seatCount: seatCount,
      description: description,
      color: color,
      Owner: { connect: { id: owner.id } },
      PhysicalAddress: { connect: { id: physicalAddress.id } },
      DeliverAddress: { connect: { id: deliverAddress.id } },
      ReceiveAddress: { connect: { id: receiveAddress.id } },
    },
  });
  if (vehicle) {
    console.log('Vehicle: ', { vehicle });
  }

  return vehicle;
}

async function main() {
  // ... you will write your Prisma Client queries here
  // Deleting all entries in database
  await prisma.vehicle.deleteMany();
  await prisma.host.deleteMany();
  await prisma.owner.deleteMany();
  await prisma.user.deleteMany();

  // Create a User
  const user = await createUser({
    email: 'test@test.com',
    name: 'Test User',
    password: await hash('test', 12),
  });

  // Create an Address

  const physicalAddress = await createPhysicalAddress({
    address: '122 Ally Lane',
    city: 'Kansas City',
    state: 'Mo',
    country: 'US',

    zipCode: '64101',
  });

  let host = null;
  let owner = null;
  let vehicle = null;
  if (user && physicalAddress) {
    // Create a Host with user and address
    host = await createHost({
      user: user,
      address: physicalAddress,
    });
  }
  if (user && physicalAddress) {
    // Create a Owner with user and address
    owner = await createOwner({
      user: user,
      address: physicalAddress,
    });
  }

  if (owner && host) {
    console.log('Passed Owner, Host and Physcial Address conditions', {
      owner,
      host,
    });
    vehicle = await CreateVehicle({
      vin: 'WDZ90000018523456',
      registrationNumber: 'YS4-R5T',
      city: 'Kansas City',
      state: 'MO',
      country: 'US',
      zipCode: '64101',
      mileage: 10005,
      vuel: 'unleaded',
      gasGrade: 'Prem',
      make: 'Audi',
      model: 'A4',
      trim: 'Prestige',
      year: 2020,
      cityMPG: 17,
      hwyMPG: 24,
      driveTrain: 'All-Wheel',
      seatCount: 5,
      description: '',
      color: 'Red',
      owner: owner,
      physicalAddress: physicalAddress,
      deliverAddress: physicalAddress,
      receiveAddress: physicalAddress,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
