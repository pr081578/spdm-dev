const { PrismaClient } = require('@prisma/client');
const { hash } = require('bcrypt');

const prisma = new PrismaClient();

interface CreateUserProps {
  email: String;
  name: String;
  password: String;
}

async function createUser({ email, name, password }: CreateUserProps) {
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
  hostInsurance?: any;
}

async function createHost({ user, address, hostInsurance }: CreateHostProps) {
  // ... you will write your Prisma Client queries here
  const host = await prisma.host.upsert({
    where: { userId: user.id },
    update: {},
    create: {
      User: { connect: { id: user.id } },
      PhysicalAddress: { connect: { id: address.id } },
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
  // ... you will write your Prisma Client queries here
  const owner = await prisma.owner.upsert({
    where: { userId: user.id },
    update: {},
    create: {
      User: { connect: { id: user.id } },
      PhysicalAddress: { connect: { id: address.id } },
    },
  });
  if (owner) {
    console.log('Owner: ', { owner });
  }
  return owner;
}

interface CreateHostInsuranceProps {
  type?: any;
  host: any;
  uploadFiles: String[];
}

async function createHostInsurance({
  type,
  host,
  uploadFiles,
}: CreateHostInsuranceProps) {
  await prisma.hostInsurance.deleteMany();
  // ... you will write your Prisma Client queries here
  const hostInsurance = await prisma.hostInsurance.upsert({
    where: { hostId: host.id },
    update: {},
    create: {
      type: type,
      Host: { connect: { id: host.id } },
      uploadFiles: uploadFiles,
    },
  });
  if (hostInsurance) {
    console.log('HostInsurance: ', { hostInsurance });
  }

  return hostInsurance;
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

interface CreateFeatureProps {
  name: string;
}

async function CreateFeature({ name }: CreateFeatureProps) {
  // you will write your Prisma Client queries here
  const feature = await prisma.feature.upsert({
    where: { name: name },
    update: {},
    create: {
      name: name,
    },
  });
  if (feature) {
    console.log('Feature: ', { feature });
  }
  return feature;
}

interface CreateVehicleFeatureProps {
  vehicle: any;
  feature: any;
}

async function CreateVehicleFeature({
  vehicle,
  feature,
}: CreateVehicleFeatureProps) {
  // you will write your Prisma Client queries here
  const vehicleId = vehicle.id;
  const featureId = feature.id;
  const vehicleFeature = await prisma.vehicleFeature.upsert({
    where: { vehicleId_featureId: { vehicleId, featureId } },
    update: {},
    create: {
      Vehicle: { connect: { id: vehicle.id } },
      Feature: { connect: { id: feature.id } },
    },
  });
  if (vehicleFeature) {
    console.log('VehicleFeature: ', { vehicleFeature });
  }
  return vehicle;
}

interface CreateHostChargeProps {
  name: String;
  price: Number;
  host: any;
  vehicle: any;
}

async function CreateHostCharge({
  name,
  price,
  host,
  vehicle,
}: CreateHostChargeProps) {
  // you will write your Prisma Client queries here
  const vehicleId = vehicle.id;
  const hostId = host.id;
  const hostCharge = await prisma.hostCharge.upsert({
    where: { vehicleId_hostId_name: { vehicleId, hostId, name } },
    update: {},
    create: {
      name: name,
      price: price,
      Vehicle: { connect: { id: vehicle.id } },
      Host: { connect: { id: host.id } },
    },
  });
  if (hostCharge) {
    console.log('HostCharge: ', { hostCharge });
  }
  return hostCharge;
}

async function main() {
  // ... you will write your Prisma Client queries here
  // Deleting all entries in database
  await prisma.hostCharge.deleteMany();
  await prisma.vehicleFeature.deleteMany();
  await prisma.feature.deleteMany();
  await prisma.hostInsurance.deleteMany();
  await prisma.vehicle.deleteMany();
  await prisma.host.deleteMany();
  await prisma.owner.deleteMany();
  await prisma.user.deleteMany();

  // Create a User
  const userHost = await createUser({
    email: 'host@example.com',
    name: 'Host One',
    password: await hash('test', 12),
  });
  const userOwner = await createUser({
    email: 'owner@example.com',
    name: 'Owner One',
    password: await hash('test', 12),
  });

  // Create an Address

  const hostPhysicalAddress = await createPhysicalAddress({
    address: '122 Ally Lane',
    city: 'Kansas City',
    state: 'Mo',
    country: 'US',
    zipCode: '64101',
  });

  const ownerPhysicalAddress = await createPhysicalAddress({
    address: '221 Belly Lane',
    city: 'Kansas City',
    state: 'Mo',
    country: 'US',
    zipCode: '64101',
  });

  let host: null = null;
  let owner: null = null;
  let vehicle: null = null;
  if (userHost && hostPhysicalAddress) {
    // Create a Host with user and address
    host = await createHost({
      user: userHost,
      address: hostPhysicalAddress,
    });

    const hostInsurance = await createHostInsurance({
      host: host,
      uploadFiles: ['/files/insurance1.doc', '/files/insurance2.doc'],
    });
  }
  if (userOwner && ownerPhysicalAddress) {
    // Create a Owner with user and address
    owner = await createOwner({
      user: userOwner,
      address: ownerPhysicalAddress,
    });
  }

  if (owner && host) {
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
      host: host,

      physicalAddress: hostPhysicalAddress,
      deliverAddress: hostPhysicalAddress,
      receiveAddress: hostPhysicalAddress,
    });
  }

  let features = new Array();
  if (vehicle) {
    features.push(
      await CreateFeature({
        name: 'heated seats',
      })
    );
    features.push(
      await CreateFeature({
        name: 'air condition',
      })
    );
  }

  if (vehicle && features.length > 0) {
    features.map(async (feature) => {
      await CreateVehicleFeature({
        vehicle: vehicle,
        feature: feature,
      });
    });
  }

  if (vehicle && host) {
    //enter code

    const hostCharges = new Array();
    hostCharges.push({ name: 'Cleaning', price: 10.3 });
    hostCharges.push({ name: 'Storage', price: 10.0 });
    hostCharges.push({ name: 'Delivery', price: 10.1 });
    hostCharges.push({ name: 'Recieving', price: 10.0 });

    hostCharges.map(async (charge) => {
      await CreateHostCharge({
        name: charge.name,
        price: charge.price,
        host: host,
        vehicle: vehicle,
      });
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
