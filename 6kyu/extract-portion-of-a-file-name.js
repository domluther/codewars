// You have to extract a portion of the file name as follows:

// Assume it will start with date represented as long number
// Followed by an underscore
// You'll have then a filename with an extension
// it will always have an extra extension at the end
// Inputs:
// 1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION

// 1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34

// 1231231223123131_myFile.tar.gz2
// Outputs
// FILE_NAME.EXTENSION

// This_is_an_otherExample.mpg

// myFile.tar
// Acceptable characters for random tests:

// abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-0123456789

// The recommended way to solve it is using RegEx and specifically groups.

// Parameters
// A string with numbers_filename.extension.otherextension

// Return
// filename.extension

// 1231231223123131_myFile.tar.gz2 => myFile.tar

// Pseudocode
// Find the first _ and the last .
// Return what's between them

class FileNameExtractor {
  static extractFileName(dirtyFileName) {
    const firstUnderscore = dirtyFileName.indexOf('_');
    const lastPeriod = dirtyFileName.lastIndexOf('.');
    return dirtyFileName.slice(firstUnderscore + 1, lastPeriod);
  }
}

const inp1 = '1231231223123131_myFile.tar.gz2';
// myFile.tar
const ans = FileNameExtractor.extractFileName(inp1);
console.log(ans);
