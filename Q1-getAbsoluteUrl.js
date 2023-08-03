const getAbsoluteUrl = (baseURL, relativeUrl) => {
    let temp = baseURL.replace('//','  ')
    let baseURL1 = baseURL.substring(0, temp.indexOf('/'))
    if(relativeUrl.startsWith('//'))
    {
        return "https:"+relativeUrl
    }
    else if(relativeUrl.startsWith('../'))
    {
        return baseURL1 +  relativeUrl.replace('..','')
    }
    else{
        return baseURL + relativeUrl
    }
}