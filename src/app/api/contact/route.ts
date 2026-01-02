import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Semua field harus diisi' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format email tidak valid' },
        { status: 400 }
      )
    }

    // Phone validation (Indonesian format)
    const phoneRegex = /^(\+62|62|0)8[1-9][0-9]{6,11}$/
    const cleanPhone = phone.replace(/[-\s]/g, '')
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { error: 'Format nomor telepon tidak valid' },
        { status: 400 }
      )
    }

    // Log the contact data (in production, you would save to database)
    console.log('New contact form submission:', {
      name,
      email,
      phone: cleanPhone,
      message,
      timestamp: new Date().toISOString()
    })

    // Here you would typically:
    // 1. Save to database using Prisma
    // 2. Send email notification
    // 3. Send confirmation to customer
    // 4. Maybe integrate with CRM

    // For now, we'll just return success
    return NextResponse.json(
      { 
        success: true, 
        message: 'Pesan Anda telah berhasil dikirim. Tim kami akan menghubungi Anda segera.' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan server. Silakan coba lagi.' },
      { status: 500 }
    )
  }
}