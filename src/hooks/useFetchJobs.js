import React, {useState} from 'react'

export default function useFetchJobs(params,page){
    return {
        jobs:[],
        error:true,
        loading:false
    }
}