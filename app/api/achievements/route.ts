import { NextRequest, NextResponse } from 'next/server';

// Achievement tracking endpoint
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, achievementId } = body;

    if (!userId || !achievementId) {
      return NextResponse.json(
        { error: 'userId and achievementId are required' },
        { status: 400 }
      );
    }

    // In a real application, save to database:
    // const { PrismaClient } = await import('@prisma/client');
    // const prisma = new PrismaClient();
    // await prisma.achievement.upsert({
    //   where: { userId_achievementId: { userId, achievementId } },
    //   create: { userId, achievementId },
    //   update: {},
    // });

    console.log('Achievement unlocked:', { userId, achievementId });

    return NextResponse.json(
      { success: true, message: 'Achievement unlocked!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Achievement error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Get user achievements
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { error: 'userId is required' },
        { status: 400 }
      );
    }

    // Mock response - replace with database query
    const mockAchievements = ['first-visit', 'terminal-master'];

    return NextResponse.json(
      { achievements: mockAchievements },
      { status: 200 }
    );
  } catch (error) {
    console.error('Get achievements error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

