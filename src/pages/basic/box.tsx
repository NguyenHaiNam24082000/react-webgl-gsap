import { useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react'

function Box(props) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef();
    // Hold state for hovered and clicked events
    const [hovered, setHovered] = useState<boolean>(false);
    const [clicked, setClicked] = useState<boolean>(false);
    // Đăng ký thành phần này vào vòng lặp kết xuất, xoay lưới mọi khung hình
    useFrame((state, delta) => (ref.current.rotation.x += delta))

    return (
        // mesh là lớp lưới có tác dụng cho việc tạo khung
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(event) => setClicked((prev) => !prev)}
            onPointerOver={(event) => setHovered(true)}
            onPointerOut={(event) => setHovered(false)}>
                {/* boxGeometry: hộp Hình học với args là chiều dài rộng và cao của cái hộp */}
                <boxGeometry args={[1,1,1]} />
                {/* meshStandardMaterial: giống với lớp da của khối thể hiện màu sắc */}
                <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

export default Box