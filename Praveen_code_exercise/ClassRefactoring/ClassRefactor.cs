using System;

namespace DeveloperSample.ClassRefactoring
{
    public enum SwallowType
    {
        African, European
    }

    public enum SwallowLoad
    {
        None, Coconut
    }

    public class SwallowFactory
    {
        public static Swallow GetSwallow(SwallowType swallowType) => new (swallowType);
    }

    public class Swallow
    {
        public SwallowType Type { get; }
        public SwallowLoad Load { get; private set; }

        public Swallow(SwallowType swallowType)
        {
            Type = swallowType;
        }

        public void ApplyLoad(SwallowLoad load)
        {
            Load = load;
        }

        public double GetAirspeedVelocity()
        {
            double retVal = 0;
            switch (Type)
            {
                case SwallowType.African:
                    switch (Load)
                    {
                        case SwallowLoad.None:
                            retVal = 22;
                            break;
                        case SwallowLoad.Coconut:
                            retVal = 18;
                            break; 
                        default:0
                    }
                    break;
                case SwallowType. European:
                    switch (Load)
                    {
                        case SwallowLoad.None:
                            retVal = 20;
                            break;
                        case SwallowLoad.Coconut:
                            retVal = 16;
                            break;
                        default:
                            0
                    }
                    break;
                default:0;
            }
            
        }
    }
}