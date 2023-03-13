import { useFrame, useThree } from '@react-three/fiber';
import React, { useEffect, useLayoutEffect, useMemo } from 'react'
import { AsciiEffect } from 'three-stdlib';

function AsciiRenderer({
    renderIndex = 1,
    bgColor = 'black',
    fgColor = 'white',
    characters = ' .:-+*=%@#',
    invert = true,
    color = false,
    resolution = 0.15
}: any) {
    const { size, gl, scene, camera } = useThree<any>();

    const effect = useMemo(() => {
        const effect = new AsciiEffect(gl, characters, { invert, color, resolution })
        effect.domElement.style.position = 'absolute'
        effect.domElement.style.top = '0px'
        effect.domElement.style.left = '0px'
        effect.domElement.style.pointerEvents = 'none'
        return effect
    }, [characters, invert, color, resolution]);

    useLayoutEffect(() => {
        effect.domElement.style.color = fgColor;
        effect.domElement.style.background = bgColor;
    }, [fgColor, bgColor])

    // Append on mount, remove on unmount
    useEffect(() => {
        gl.domElement.style.opacity = '0';
        gl.domElement.parentNode.appendChild(effect.domElement);
        return () => {
            gl.domElement.style.opacity = '1'
            gl.domElement.parentNode.removeChild(effect.domElement)
        }
    }, [effect]);

    useEffect(() => {
        effect.setSize(size.width, size.height);
    }, [effect, size])

    // Take over render-loop (that is what the index is for)
    useFrame((state) => {
        effect.render(scene, camera)
    }, renderIndex)

    // This component returns nothing, it is a purely logical
    return null;
}

export default AsciiRenderer