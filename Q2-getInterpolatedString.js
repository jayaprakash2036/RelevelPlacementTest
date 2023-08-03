function getInterpolatedString(template, obj)
{
    let InterpolatedString
    InterpolatedString = template.replaceAll('{{', '')
    InterpolatedString = InterpolatedString.replaceAll('}}', '')

    for(const key in obj)
    {
        if(InterpolatedString.includes(key)){
            InterpolatedString = InterpolatedString.replaceAll(key, obj[key])
        }
    }
    
    return InterpolatedString

}