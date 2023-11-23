'use client';

import { useState } from 'react';

export function NavItems() {
    const [activeIndex, setActiveIndex] = useState<null | number>(null);

    return <div className="flex gap-4 h-full"></div>;
}
