//커스텀 훅은 use를 붙여줘야함

import { useState } from "react";

/**
 * 커스텀 훅이란??
 * 
 * !! 훅을 사용하고 있는 재사용 가능한 로직을 모듈화 시킨 것
    
    재사용 되지 않을 훅을 커스텀 훅으로 만드는 것은 옳을까??

    개인적으로 옳지 않다고 생각한다. 이유 : 파일이 너무 많아져서 관리하기 힘듦
*/

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const onChange = (e) => {
        setValue(e.target.value);
    }

    return [value, onChange, setValue];
}

export default useInput;