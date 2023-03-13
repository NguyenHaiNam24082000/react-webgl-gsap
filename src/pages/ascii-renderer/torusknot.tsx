import { useCursor } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react'

function Torusknot(props: any) {
    const ref = useRef<any>();
    const [clicked, setClicked] = useState<boolean>(false);
    const [hovered, setHovered] = useState<boolean>(false);

    useCursor(hovered);
    useFrame((state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta / 2))
    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1.25}
            onClick={() => setClicked((prev) => !prev)}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <torusKnotGeometry args={[1, 0.2, 128, 32]} />
            <meshStandardMaterial color="orange" />
        </mesh>
    )
}

export default Torusknot