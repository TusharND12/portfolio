import { NextRequest, NextResponse } from 'next/server';

// Analytics tracking endpoint
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { event, page, data } = body;

    if (!event) {
      return NextResponse.json(
        { error: 'Event is required' },
        { status: 400 }
      );
    }

    // In a real application, save to database:
    // const { PrismaClient } = await import('@prisma/client');
    // const prisma = new PrismaClient();
    // await prisma.analytics.create({
    //   data: { event, page, data },
    // });

    console.log('Analytics event:', { event, page, data });

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Get analytics data
export async function GET(request: NextRequest) {
  try {
    // In a real application, fetch from database
    // For now, return mock data
    const mockData = {
      totalVisitors: 1234,
      pageViews: 5678,
      averageTime: '2m 34s',
      topPages: [
        { path: '/', views: 234 },
        { path: '/projects', views: 189 },
        { path: '/skills', views: 145 },
      ],
    };

    return NextResponse.json(mockData, { status: 200 });
  } catch (error) {
    console.error('Analytics fetch error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

