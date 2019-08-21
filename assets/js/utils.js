function map(val, originalRangeStart, originalRangeEnd, TargetRangeStart, TargetRangeEnd){
    const originalRange = originalRangeEnd - originalRangeStart
    const targetRange = TargetRangeEnd - TargetRangeStart

    const valPercented = val / originalRange

    const result = (valPercented * targetRange) + TargetRangeStart

    return result

}