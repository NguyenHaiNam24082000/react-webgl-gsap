import React from 'react'
import { Canvas } from "@react-three/fiber";
import Box from "./box";
import { OrbitControls } from "@react-three/drei";

//TODO: tìm hiểu pointLight và thuộc tính penumbra của spotLight
function BasicPage() {

    return (
        <Canvas>
            {/* ambientLight: Ánh sáng môi trường xung quanh intensity số càng lớn càng sáng và ngược lại */}
            <ambientLight intensity={0.5} />
            {/* spotLight: giống ánh đèn trong hậu trường thể hiện mảng sáng tối của vât thể khi chiếu ánh sáng từ một hướng
          * Ví dụ: position: vị trí ánh sáng x,y,z. angle là góc chiếu. penumbra: tạm thời chưa biết
          */}
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            {/* poinLight: chưa hiểu */}
            <pointLight position={[-10, -10, -10]} />
            {/* poition: là vị trí của lớp box với 3 toạ độ x, y, z */}
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
            {/* OrbitControls: Dùng để tương tác với canvas như xoay zoom */}
            <OrbitControls />
        </Canvas>
    )
}

export default BasicPage