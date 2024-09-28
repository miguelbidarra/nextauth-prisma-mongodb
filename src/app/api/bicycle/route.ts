import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Create a new bicycle
    const newBicycle = await db.bicycle.create({
      data: {
        name: data.name,
        image: data.image,
        gears: data.gears,
        wheelSize: data.wheelSize,
        frameSize: data.frameSize,
      },
    });

    return NextResponse.json(newBicycle);
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json(
      {
        message:
          error instanceof Error ? error.message : "An unknown error occurred",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET() {
  try {
    // Fetch all bicycles
    const bicycles = await db.bicycle.findMany();

    return NextResponse.json(bicycles);
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json(
      {
        message:
          error instanceof Error ? error.message : "An unknown error occurred",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();

    // Delete a bicycle by ID
    const deletedBicycle = await db.bicycle.delete({
      where: { id },
    });

    return NextResponse.json(deletedBicycle);
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json(
      {
        message:
          error instanceof Error ? error.message : "An unknown error occurred",
      },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const data = await request.json();

    // Update a bicycle by ID
    const updatedBicycle = await db.bicycle.update({
      where: { id: data.id },
      data: {
        name: data.name,
        image: data.image,
        gears: data.gears,
        wheelSize: data.wheelSize,
        frameSize: data.frameSize,
      },
    });

    return NextResponse.json(updatedBicycle);
  } catch (error) {
    console.error("PUT error:", error);
    return NextResponse.json(
      {
        message:
          error instanceof Error ? error.message : "An unknown error occurred",
      },
      {
        status: 500,
      }
    );
  }
}
